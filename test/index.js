import test from 'ava'
import React, {Fragment} from 'react'
import enzyme from 'enzyme'
import render from 'react-test-renderer'
import {Id, IdProvider} from '../src'

test('generates ids', t => {
  const component1 = enzyme.render(<Id>{id => <div id={id} />}</Id>)
  t.true(component1.is('div'))
  t.is(component1.prop('id'), '🆔id-1')

  const component2 = (
    <div>
      <Id>{id => <span id={id} />}</Id>
      <IdProvider>
        <Id>{id => <span id={id} />}</Id>
      </IdProvider>
      <Id>{id => <span id={id} />}</Id>
    </div>
  )
  t.snapshot(render.create(component2).toJSON())
})

test('provider resets the counter', t => {
  const component = enzyme.render(
    <Fragment>
      <IdProvider>
        <div className="provider1">
          <Id>{id => <div className="one" id={id} />}</Id>
          <Id>{id => <div className="two" id={id} />}</Id>
        </div>
      </IdProvider>
      <IdProvider>
        <div className="provider2">
          <Id>{id => <div className="one" id={id} />}</Id>
          <Id>{id => <div className="two" id={id} />}</Id>
        </div>
      </IdProvider>
    </Fragment>
  )
  t.is(component.find('.provider1 .one').prop('id'), '🆔id-1')
  t.is(component.find('.provider2 .one').prop('id'), '🆔id-1')
})

test('provider allows setting a custom id prefix', t => {
  const component = enzyme.render(
    <IdProvider prefix="😎-">
      <Id>{id => <div id={id} />}</Id>
    </IdProvider>
  )
  t.is(component.prop('id'), '😎-1')
})

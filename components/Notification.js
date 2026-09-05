import { Fragment, useState } from 'react'
import { Transition } from '@headlessui/react'
import { IoCheckmarkCircleOutline, IoClose } from 'react-icons/io5'

export default function Notification({ show, setShow, text: { contact, type } }) {
  return (
    <>
      {/* Global notification live region, render this permanently at the end of the document */}
      <div
        aria-live="assertive"
        className="pointer-events-none fixed inset-0 z-50 flex items-end px-4 py-6 sm:items-start sm:p-6"
      >
        <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
          {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
          <Transition
            show={show}
            as={Fragment}
            enter="transform ease-out duration-300 transition"
            enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
            enterTo="translate-y-0 opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="pointer-events-auto w-full max-w-sm overflow-hidden border border-paper-400 bg-paper-50 shadow-md dark:border-ink-600 dark:bg-ink-800">
              <div className="p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <IoCheckmarkCircleOutline
                      className="h-6 w-6 text-brass-500"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-3 w-0 flex-1 pt-0.5">
                    <p className="font-sans text-xs uppercase tracking-caps text-ink-800 dark:text-paper-100">
                      {type} copied!
                    </p>
                    <p className="mt-1 font-serif text-sm text-ink-500 dark:text-paper-500">
                      {contact} has been copied to your clipboard.
                    </p>
                  </div>
                  <div className="ml-4 flex flex-shrink-0">
                    <button
                      type="button"
                      className="inline-flex bg-transparent text-ink-400 hover:text-primary-600 focus:outline-none dark:text-paper-500 dark:hover:text-primary-300"
                    >
                      <span className="sr-only">Close</span>
                      <IoClose
                        className="h-5 w-5"
                        aria-hidden="true"
                        onClick={() => {
                          setShow(false)
                        }}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </>
  )
}

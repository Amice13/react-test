const MyCustomComponent = ({ triggerQuery, model, modelUpdate }) => (
  <div className="card">
    <div className="title-container">
      <div className="title">Custom component</div>
      <a href="https://docs.retool.com/apps/web/guides/components/develop-custom-components/custom" target="_blank" className="docs-link">View docs</a>
    </div>
    <div className="content">
      {/* The text below is dynamic and specified by the model. */}
      {model.displayText}
    </div>
    <div className="button-container">
      {/* This button fires a dynamic query (specified in the model) when clicked. */}
      <button
        className="button button--main"
        onClick={() => triggerQuery(model.queryToTrigger)}
      >
        Trigger query
      </button>

      {/* This button updates the model when clicked. */}
      <button
        className="button button--secondary"
        onClick={() => modelUpdate({ displayText: 'The body of this text references "model.displayText", which just changed!' })}
      >
        Update model
      </button>
    </div>
  </div>
)

export default MyCustomComponent

(function() {var implementors = {
"meta_srv":[["impl&lt;T&gt; Service&lt;<a class=\"struct\" href=\"https://docs.rs/http/0.2.11/http/request/struct.Request.html\" title=\"struct http::request::Request\">Request</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"meta_srv/service/admin/struct.Admin.html\" title=\"struct meta_srv::service::admin::Admin\">Admin</a><div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</div>"]],
"servers":[["impl&lt;S&gt; Service&lt;<a class=\"struct\" href=\"https://docs.rs/http/0.2.11/http/request/struct.Request.html\" title=\"struct http::request::Request\">Request</a>&lt;Body&gt;&gt; for <a class=\"struct\" href=\"servers/metrics/struct.MetricsMiddleware.html\" title=\"struct servers::metrics::MetricsMiddleware\">MetricsMiddleware</a>&lt;S&gt;<div class=\"where\">where\n    S: Service&lt;<a class=\"struct\" href=\"https://docs.rs/http/0.2.11/http/request/struct.Request.html\" title=\"struct http::request::Request\">Request</a>&lt;Body&gt;, Response = <a class=\"struct\" href=\"https://docs.rs/http/0.2.11/http/response/struct.Response.html\" title=\"struct http::response::Response\">Response</a>&lt;<a class=\"type\" href=\"https://docs.rs/tonic/0.10.2/tonic/body/type.BoxBody.html\" title=\"type tonic::body::BoxBody\">BoxBody</a>&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,\n    S::Future: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,</div>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()
# Darboux 定理　`thm.darboux`　·　说明
根 `../`

$$\frac{d}{dt}\bigl(\varphi_{t}^{*}\omega_{t}\bigr) = \varphi_{t}^{*}\bigl(\mathcal{L}_{X_{t}}\omega_{t} + \tfrac{d}{dt}\omega_{t}\bigr) = \varphi_{t}^{*}\bigl(d\iota_{X_{t}}\omega_{t} + \iota_{X_{t}}d\omega_{t} + \eta\bigr).$$

 由 $d\omega_{t} = 0$、$\iota_{X_{t}}\omega_{t} = -\theta$、$\eta = d\theta$，括号内等于 $-d\theta + 0 + d\theta = 0$。所以 $\varphi_{t}^{*}\omega_{t}$ 不随 $t$ 变，等于 $t = 0$ 时的 $\varphi_{0}^{*}\omega_{0} = \omega_{0}$；取 $t = 1$ 得 $\varphi_{1}^{*}\omega = \omega_{0}$。于是 $(q_{i} \circ \varphi_{1}^{-1},\, p_{i} \circ \varphi_{1}^{-1})$ 就是 $\varphi_{1}(U)$ 上的 Darboux 坐标。∎

> 续见 notes/thm.darboux.5.md

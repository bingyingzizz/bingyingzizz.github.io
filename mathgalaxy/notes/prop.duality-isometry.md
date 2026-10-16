# ‖g‖_q = ‖φ_g‖　`prop.duality-isometry`　·　说明
根 `../`

证明的要点是**构造一个把 $\varphi_g$ 的范数顶满的 $f$**。



**$q < \infty$ 时**：由 Hölder 已有 $\|\varphi_g\| \le \|g\|_q$；反向取



$$f := \frac{|g|^{q-1} \operatorname{sgn} g}{\|g\|_q^{\,q-1}}$$



直接算得 $\|f\|_p^p = \dfrac{\int |g|^q}{\int |g|^q} = 1$，于是



$$\|\varphi_g\| \ge \int fg = \|g\|_q$$

**$q = 1$ 时**取 $f = \operatorname{sgn} g$（范数 1），得 $\int fg = \|g\|_1$。

**$q = \infty$ 时**要用到半有限性：对任意 $\varepsilon > 0$，集合 $A = \{|g(x)| > \|g\|_\infty - \varepsilon\}$ 有正测度；由半有限性取 $B \subseteq A$ 使 $0 < \mu(B) < \infty$，令



$$f := \mu(B)^{-1} \chi_B \operatorname{sgn} g$$



则 $\|f\|_1 = 1$ 而 $\|\varphi_g\| \ge \int fg = \dfrac{1}{\mu(B)} \int_B |g| \ge \|g\|_\infty - \varepsilon$。由 $\varepsilon$ 任意即得。∎

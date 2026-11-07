# Cauchy–Goursat 造引理 A，Cauchy 积分 + 有理逼近推 Runge
`imp.runge` · 推出 · strong 边 · 根 `../`

`thm.cauchy-goursat` Cauchy–Goursat 积分定理 + `thm.cauchy-integral-formula` Cauchy 积分公式 → `thm.runge` Runge 逼近定理

**引理 A（Cauchy 表示）**：设 $K$ 紧、$V \supset K$ 开、$f$ 在 $V$ 上全纯。取边长 $h$ 的方格网使 $h\sqrt{2} < \operatorname{dist}(K, \mathbb{C}\setminus V)$，令 $S$ 为所有与 $K$ 相交的闭方格之并；则 $K\subset\operatorname{int}S$、$S\subset V$。对 $z\in K$，$h(\zeta) := (f(\zeta)-f(z))/(\zeta-z)$（$\zeta=z$ 处补定义为 $f'(z)$）在 $S$ 的某个邻域上全纯，故在每个方格 $Q$ 上用 Cauchy–Goursat 得 $\int_{\partial Q} h = 0$；内部公共边正反定向相消，只剩 $\Gamma = \partial S$，故 $f(z) = \frac{1}{2\pi i}\int_{\Gamma}\frac{f(\zeta)}{\zeta-z}\,\mathrm{d}\zeta$（末步用 $\op

> 续见 proofs/imp.runge.2.md

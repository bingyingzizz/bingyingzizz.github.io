# Gauss 引理　`lem.gauss-lemma`　·　说明
根 `../`

**推论一（测地圆与测地线正交）**：取 $w \perp v$，得 $\langle (\mathrm{d}\exp_{p})_{v}(v), (\mathrm{d}\exp_{p})_{v}(w)\rangle = 0$。径向速度 $(\mathrm{d}\exp_{p})_{v}(v)$ 就是测地线的切向量，而 $w$ 沿测地圆方向，故径向测地线与以 $p$ 为心的测地圆正交。

**推论二（极坐标展开）**：取 $v = \rho u$（$u$ 单位向量）、$w \perp v$，令 $J(\rho) = (\mathrm{d}\exp_{p})_{\rho u}(\rho w)$。则 $J(0) = 0$、$J^{\prime}(0) = w$，且 $J$ 是沿测地线 $t \mapsto \exp_{p}(tu)$ 的 Jacobi 场：$J^{\prime\prime} + R(J, u)u = 0$（这里 $J^{\prime}$ 是沿测地线的协变导数）。由 $J(0) = 0$ 泰勒展开得 $J(\rho) = \rho w + O(\rho^{3})$，故 $\sqrt{G} = \lVert J\rVert = \rho\lVert w\rVert + O(\rho^{3}) = \rho + O(\rho^{3})$（$w$ 取单位）。

> 续见 notes/lem.gauss-lemma.4.md

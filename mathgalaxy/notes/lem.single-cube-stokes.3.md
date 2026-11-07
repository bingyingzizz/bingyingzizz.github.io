# 方块上的 Stokes 公式　`lem.single-cube-stokes`　·　说明
根 `../`

两边逐项相同，故 $\int_{I^{k}}\mathrm{d}\eta = \int_{\partial I^{k}}\eta$。$k = 1$ 时 $\eta = f$、$\mathrm{d}\eta = f^{\prime}\mathrm{d}x$，两边分别给 $\int_{0}^{1} f^{\prime} = f(1) - f(0)$ 与 $f(1) - f(0)$，符号约定自洽。∎

**为什么这一块必须先做**：一般方块 $c$ 上的情形全靠拉回（$c^{\ast}\mathrm{d} = \mathrm{d}c^{\ast}$），拉回之后就是本引理。所以本引理是链版 Stokes 的**唯一**实质内容，其余都是翻译。

**⚠️ 符号最容易错的地方**：$\eta$ 写成 $\sum_{j}(-1)^{j-1}f_{j}\mathrm{d}x^{1}\wedge\cdots\widehat{\mathrm{d}x^{j}}\cdots\wedge\mathrm{d}x^{k}$（带帽表示略去该因子）时，$\mathrm{d}\eta = \sum_{j}\partial_{j}f_{j}\mathrm{d}x^{1}\wedge\cdots\wedge\mathrm{d}x^{k}$ 里**没有**额外符号。若这里多写一个 $(-1)^{j-1}$，右边就会整个错位面。

**⚠️ 边界上的零测集**：$\eta$ 只要求定义在开集上、连续到边界；逐面拉回时用的是 $\eta$ 在面上的值，而 $\partial I^{k}$ 是零测集，所以积分不受延拓方式影响。

> 续见 notes/lem.single-cube-stokes.4.md

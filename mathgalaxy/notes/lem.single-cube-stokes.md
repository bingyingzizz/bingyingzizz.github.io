# 方块上的 Stokes 公式　`lem.single-cube-stokes`　·　说明
根 `../`

**证明的骨架**：把 $\eta$ 按缺哪个 $\mathrm{d}x^{j}$ 拆成 $k$ 项，每项是一个一元积分；$\mathrm{d}\eta$ 是 $\sum_{j}\partial_{j}f_{j}$。对每个 $j$ 用一元基本定理把 $x^{j}$ 那层积完，剩下的正好是第 $j$ 个坐标两端的面积分之差。右边逐面拉回时只有 $j$ 与面号相同的那一项活着 —— 两个符号相乘恰好对上。完整计算见边 `imp.spivak-cube-stokes`。

**为什么这一块必须先做**：一般方块 $c$ 上的情形全靠拉回（$c^{\ast}\mathrm{d} = \mathrm{d}c^{\ast}$），拉回之后就是本引理。所以本引理是链版 Stokes 的**唯一**实质内容，其余都是翻译。

**⚠️ 符号最容易错的地方**：$\eta$ 写成 $\sum_{j}(-1)^{j-1}f_{j}\mathrm{d}x^{1}\wedge\cdots\widehat{\mathrm{d}x^{j}}\cdots\wedge\mathrm{d}x^{k}$（带帽表示略去该因子）时，$\mathrm{d}\eta = \sum_{j}\partial_{j}f_{j}\mathrm{d}x^{1}\wedge\cdots\wedge\mathrm{d}x^{k}$ 里**没有**额外符号。若这里多写一个 $(-1)^{j-1}$，右边就会整个错位面。

> 续见 notes/lem.single-cube-stokes.2.md

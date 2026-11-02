# 体积密度与体积形式　`def.volume-density`　·　说明
根 `../`

把 $\omega$ 除以它在正向标准正交基上的取值，就得到满足 $\mathrm{d}V(e_{1},\ldots,e_{n}) = 1$ 的那个形式 —— 所以「可定向 $+$ 度量」恰好给出一个体积形式，且只差一个定向的符号。

**二维时它就是 `def.area-element`**：那里写 $\mathrm{d}A = \sqrt{\det(g_{ij})}\,\mathrm{d}u\wedge\mathrm{d}v$，与这里逐字相同；「面积元是密度、不是形式」那句话说的就是 $\mathrm{d}\mu_{g}$ 那一面。

**例子**：$\mathbb{R}^{n}$ 标准度量与标准定向给出 $\mathrm{d}V = \mathrm{d}x^{1}\wedge\cdots\wedge\mathrm{d}x^{n}$；

半径 $R$ 的 $S^{2}$ 在球坐标 $(\theta,\varphi)$ 下（取 $\partial_{\theta},\partial_{\varphi}$ 为保向）给出 $\mathrm{d}V = R^{2}\sin\theta\,\mathrm{d}\theta\wedge\mathrm{d}\varphi$。

**⚠️ 记号分歧**：很多书写 $\mathrm{d}V$ 指**密度**（不带符号的测度）。本图把两者分开：$\mathrm{d}V$ 是形式（带定向），$\mathrm{d}\mu_{g} = |\mathrm{d}V|$ 是密度。抄公式前先看清对方用的是哪一种。

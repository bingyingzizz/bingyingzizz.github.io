# 体积密度与体积形式　`def.volume-density`　·　说明
根 `../`

**存在性**：可定向流形上存在处处非零的 $n$-形式 $\omega$（可定向即「能被转移映射 Jacobi 行列式处处为正的卡族覆盖」，二维情形见 `def.orientable-surface`）。把 $\omega$ 除以它在正向标准正交基上的取值，就得到满足 $\mathrm{d}V(e_{1},\ldots,e_{n}) = 1$ 的那个形式 —— 所以「可定向 $+$ 度量」恰好给出一个体积形式，且只差一个定向的符号。

**二维时它就是 `def.area-element`**：那里写 $\mathrm{d}A = \sqrt{\det(g_{ij})}\,\mathrm{d}u\wedge\mathrm{d}v$，与这里逐字相同；「面积元是密度、不是形式」那句话说的就是 $\mathrm{d}\mu_{g}$ 那一面。

**例子**：$\mathbb{R}^{n}$ 标准度量与标准定向给出 $\mathrm{d}V = \mathrm{d}x^{1}\wedge\cdots\wedge\mathrm{d}x^{n}$；半径 $R$ 的 $S^{2}$ 在球坐标 $(\theta,\varphi)$ 下（取 $\partial_{\theta},\partial_{\varphi}$ 为保向）给出 $\mathrm{d}V = R^{2}\sin\theta\,\mathrm{d}\theta\wedge\mathrm{d}\varphi$。

> 续见 notes/def.volume-density.3.md

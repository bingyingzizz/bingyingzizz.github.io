# imp.metric-paracompact
`imp.metric-paracompact` · 推出 · strong 边 · 根 `../`

`def.metric-space` 距离空间 → `def.paracompact` 仿紧空间

**半径要减半**：中心相距 $\ge 2^{-n}$ 只保证**半径 $2^{-n-1}$** 的球两两不交（两球交于 $z$ 会给出 $d(x,y) \le d(x,z)+d(z,y) < 2\cdot 2^{-n-1} = 2^{-n}$，矛盾）；半径 $2^{-n}$ 那族只负责**覆盖**。下面说的「离散族」指的都是减半后的 $\bigl\{, B(s,2^{-n-1}):s\in S_{n},\bigr\}$；

$\bigcup_{n}\mathcal{B}_{n}$ 是 $\sigma$-离散族。

**第 2 步（$\sigma$-离散 $\implies$ 局部有限）**：对一个固定点 $x$，$B(x, 2^{-n})$ 只与 $S_{n}$ 中有限多个点相交（它们两两相距 $\ge 2^{-n}$，而都落在 $B(x, 2^{-n+1})$ 里 —— 直径有限的距离空间里这样的点最多有限多个）。

于是 $x$ 的一个邻域只碰到 $\mathcal{B}_{n}$ 中有限多个成员 ✓。

> 续见 proofs/imp.metric-paracompact.3.md

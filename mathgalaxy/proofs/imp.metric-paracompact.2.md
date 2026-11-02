# imp.metric-paracompact
`imp.metric-paracompact` · 推出 · strong 边 · 根 `../`

`def.metric-space` 距离空间 → `def.paracompact` 仿紧空间

**第 2 步（$\sigma$-离散 $\implies$ 局部有限）**：对一个固定点 $x$，$B(x, 2^{-n})$ 只与 $S_{n}$ 中有限多个点相交（它们两两相距 $\ge 2^{-n}$，而都落在 $B(x, 2^{-n+1})$ 里 —— 直径有限的距离空间里这样的点最多有限多个）。于是 $x$ 的一个邻域只碰到 $\mathcal{B}_{n}$ 中有限多个成员 ✓。

**第 3 步（贴回覆盖）**：把 $\mathcal{B}_{n}$ 的每个球 $B(s, 2^{-n})$ 换成「$s$ 所在的某个 $U \in \mathcal{U}$」，并对 $n$ 用 $\sigma$-离散 $\implies$ 由 Stone 的加细定理（$\sigma$-离散族可加细进任意开覆盖）得到 $\mathcal{U}$ 的局部有限开加细。于是 $X$ 仿紧 ✓。∎

> 续见 proofs/imp.metric-paracompact.3.md

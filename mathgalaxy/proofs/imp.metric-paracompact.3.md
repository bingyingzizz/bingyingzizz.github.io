# imp.metric-paracompact
`imp.metric-paracompact` · 推出 · strong 边 · 根 `../`

`def.metric-space` 距离空间 → `def.paracompact` 仿紧空间

**第 3 步（贴回覆盖）**：把 $\mathcal{B}_{n}$ 的每个球 $B(s, 2^{-n})$ 换成「$s$ 所在的某个 $U \in \mathcal{U}$」，并对 $n$ 用 $\sigma$-离散 $\implies$ 由 Stone 的加细定理（$\sigma$-离散族可加细进任意开覆盖）得到 $\mathcal{U}$ 的局部有限开加细。

于是 $X$ 仿紧 ✓。

∎

⛔ **这条不能靠「度量 $\implies$ 正规」绕过去**：正规**不**蕴含仿紧（Sorgenfrey 直线正规、仿紧，但存在正规而不仿紧的空间）。所以度量 $\implies$ 仿紧是一条**独立**的定理，不是分离公理的推论。

> 骨架：只给 Stone 定理的三步构造，局部有限加细的逐项验证未展开；与 `imp.metric-paracompact-b5` 是同一概念的两条并行骨架。

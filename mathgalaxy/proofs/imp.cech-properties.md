# imp.cech-properties
`imp.cech-properties` · 推出 · strong 边 · 根 `../`

`def.cech-functor` Čech 函子 + `def.grothendieck-topology` Grothendieck 拓扑 + `def.cech-cohomology` Čech 上同调 → `prop.cech-properties` Čech 函子的性质

**证明。** 记 $\widehat{H}(T) := \varinjlim_{(X_{i}\to X)}\check{H}^{0}\bigl((X_{i}),T\bigr)$，其中 $\check{H}^{0}$ 是 $\prod_{i}T(X_{i}) \rightrightarrows \prod_{i,j}T(X_{i}\times_{X}X_{j})$ 的等化子。
**1.（左正合）** $T \mapsto \check{H}^{0}((X_{i}),T)$ 只用到 $T$ 的取值与拉回，是有限极限（积 + 等化子）的复合，故保有限极限；而 $\mathbf{Set}$ 里的**滤过余极限正合**（与有限极限交换）✓。两者合起来给出 $\widehat{H}$ 左正合 ✓。
**2.（分离 / 层）** $\widehat{H}(T)(X)$ 的元素是「某个覆盖上的相容族」，两个元素相等 $\iff$ 存在公共细化使它们在那上面一致（滤过性）。

> 续见 proofs/imp.cech-properties.2.md

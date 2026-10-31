# Čech 函子的性质　`prop.cech-properties`　·　说明
根 `../`

**证明。** 记 $\widehat{H}(T) := \varinjlim_{(X_{i}\to X)}\check{H}^{0}\bigl((X_{i}),T\bigr)$，其中 $\check{H}^{0}$ 是 $\prod_{i}T(X_{i}) \rightrightarrows \prod_{i,j}T(X_{i}\times_{X}X_{j})$ 的等化子。
**1.（左正合）** $T \mapsto \check{H}^{0}((X_{i}),T)$ 只用到 $T$ 的取值与拉回，是有限极限（积 + 等化子）的复合，故保有限极限；而 $\mathbf{Set}$ 里的**滤过余极限正合**（与有限极限交换）✓。两者合起来给出 $\widehat{H}$ 左正合 ✓。
**2.（分离 / 层）** $\widehat{H}(T)(X)$ 的元素是「某个覆盖上的相容族」，两个元素相等 $\iff$ 存在公共细化使它们在那上面一致（滤过性）。于是：若它们在某个覆盖的每支上相等，则在该覆盖上就已经相等，故 $\widehat{H}(T) \to \prod_{i}\widehat{H}(T)(X_{i})$ 单 —— 即 $\widehat{H}(T)$ **分离** ✓。进一步，若 $T$ 分离，任何 $\widehat{H}(T)$ 上的相容族可以逐层提升到 $T$（分离性保证提升唯一），从而粘成 $\widehat{H}(T)$ 的一个元素，故 $\widehat{H}(T)$ 是**层** ✓

> 续见 notes/prop.cech-properties.2.md

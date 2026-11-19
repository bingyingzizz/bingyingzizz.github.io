# imp.cech-properties
`imp.cech-properties` · 推出 · strong 边 · 根 `../`

`def.cech-functor` Čech 函子 + `def.grothendieck-topology` Grothendieck 拓扑 + `def.cech-cohomology` Čech 上同调 → `prop.cech-properties` Čech 函子的性质

于是：若它们在某个覆盖的每支上相等，则在该覆盖上就已经相等，故 $\widehat{H}(T) \to \prod_{i}\widehat{H}(T)(X_{i})$ 单 —— 即 $\widehat{H}(T)$ **分离** ✓。

进一步，若 $T$ 分离，任何 $\widehat{H}(T)$ 上的相容族可以逐层提升到 $T$（分离性保证提升唯一），从而粘成 $\widehat{H}(T)$ 的一个元素，故 $\widehat{H}(T)$ 是**层** ✓。
**3.（与嵌入的关系）** 由 $\check{H}^{0}$ 是等化子，$T(X) \to \widehat{H}(T)(X)$ 总是单 $\iff$ 「$T$ 上两个元素若在某个覆盖上一致则相等」，即 $T$ 分离 ✓；

这个映射还是满的 $\iff$ 每个相容族都能粘合，即 $T$ 是层 ✓。

> 续见 proofs/imp.cech-properties.3.md

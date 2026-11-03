# Čech 函子的性质　`prop.cech-properties`　·　说明
根 `../`

进一步，若 $T$ 分离，任何 $\widehat{H}(T)$ 上的相容族可以逐层提升到 $T$（分离性保证提升唯一），从而粘成 $\widehat{H}(T)$ 的一个元素，故 $\widehat{H}(T)$ 是**层** ✓。
**3.（与嵌入的关系）** 由 $\check{H}^{0}$ 是等化子，$T(X) \to \widehat{H}(T)(X)$ 总是单 $\iff$ 「$T$ 上两个元素若在某个覆盖上一致则相等」，即 $T$ 分离 ✓；

这个映射还是满的 $\iff$ 每个相容族都能粘合，即 $T$ 是层 ✓。

于是 $T$ 分离 $\iff T \to \widehat{H}(T)$ 单、$T$ 是层 $\iff$ 它是同构 ✓。

∎

1 的理由很短：$\operatorname{Hom}(-, T)$ 保极限，而**滤过余极限左正合**。3 说明「分离」与「层」的差别就是「$T$ 在 $\widehat{H}$ 里是不是已经到顶了」—— 于是「做两次 $\widehat{H}$」这件事有了明确的意义。

> 续见 notes/prop.cech-properties.3.md

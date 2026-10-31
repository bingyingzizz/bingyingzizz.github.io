# 拓扑阿贝尔群嵌入凝聚态　`prop.abtop-to-abcond`　·　说明
根 `../`

**证明（照书：形式上来自「拓扑空间到凝聚态集」那条定理）。** 对拓扑阿贝尔群 $M$，记 $\underline{M}(S) := C(S, M)$，逐点取加法，得到 $\mathrm{CondAb}$ 的对象 ✓（层条件是「连续映射的粘合」，逐点成立）。
- **忠实**：$f \ne g : M \to N$ 时取一点 $m$ 使 $f(m)\ne g(m)$，则在 $\underline{M}(\bullet)$ 上 $f,g$ 已经不同 ✓（用测试对象 $\bullet$ 这一个点就够）。
- **保所有极限**：凝聚态侧的极限逐项计算，而 $C\bigl(S, \varprojlim_{i} M_{i}\bigr) = \varprojlim_{i} C(S, M_{i})$ —— 拓扑阿贝尔群的极限（积 / 核 / 等化子）里「连续映射由各分量连续决定」✓。逐项取极限得到的仍是层，故它就是 $\mathrm{CondAb}$ 里的极限 ✓。
- **紧生成那一部分全忠实**：由 $\operatorname{Hom}_{\mathrm{Cond}}(\underline{X}, \underline{Y}) = C(X, Y)$（紧生成情形，见「内部 Hom 的函数空间刻画」），把 $X, Y$ 取成紧生成的拓扑阿贝尔群、并把同态条件一并带上即得。∎
⚠️ **反向没有

> 续见 notes/prop.abtop-to-abcond.3.md

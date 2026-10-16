# 预加性结构唯一　`prop.hom-enrichment-unique`　·　说明
根 `../`

**证明。** 记 $\Delta_{M} : M \to M \oplus M$ 是由**积**的泛性给出的「对角线」（$p_{k}\Delta_{M} = 1_{M}$）、$\nabla_{N} : N \oplus N \to N$ 是由**余积**的泛性给出的「余对角线」（$\nabla_{N}i_{k} = 1_{N}$）、$f \oplus g : M \oplus M \to N \oplus N$ 是由四个角 $p_{k}(f\oplus g)i_{l} = \delta_{kl}\,(f \text{ 或 } g)$ 刻画的映射。这三个映射**只用到直和的对象、投影与含入**，与任何群结构无关 ✓。
**关键公式**：
$$f + g = \nabla_{N}\circ (f \oplus g)\circ \Delta_{M}.$$
验证：由 $p_{k}(f\oplus g) = (\text{第} k \text{分量})p_{k}$ 得 $(f\oplus g)\Delta_{M}$ 的两个分量恰是 $f$ 与 $g$，即 $(f\oplus g)\Delta_{M} = i_{1}f + i_{2}g$；再作用 $\nabla_{N}$，用 $\nabla_{N}i_{k} = 1_{N}$ 得 $f + g$ ✓。（这一步的**计算**用到了群结构，但公式右边本身不依赖它。）
**唯一性**：既然「$f$ 与 $g$ 的和」等于一个只由范畴结构与直和写出的表达式，任何使复合双线性的群结构都必须满足同一公式，故与它逐对一致 ✓。∎

> 续见 notes/prop.hom-enrichment-unique.2.md

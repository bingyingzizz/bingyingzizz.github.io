# 离散 Huber pair　`def.discrete-huber-pair`　·　续页（第 2 页）
[在星图里打开](../#n=def.discrete-huber-pair)　·　第 1 页 [nodes/def.discrete-huber-pair.md](./def.discrete-huber-pair.md)

## 陈述（续）
- $A$ 是离散环（不带拓扑，见 `def.ring`）；
- $A^+ \subseteq A$ 是**整闭**子环（$A$ 中在 $A^+$ 上整的元素仍属于 $A^+$；「整」= 满足一个首一多项式方程，像 $\sqrt{2}$ 在 $\mathbb{Z}$ 上整）。

它给出一个解析环（解析环是 `def.analytic-ring` 里的东西；这里只需知道它是「$A$ 的完备模版本」）：
$$(A, A^+)_\blacksquare := \varinjlim_{(B,B^+) \to (A,A^+)} (B, B^+)_\blacksquare,$$

余极限跑遍所有「$B$ 与 $B^+$ 都有限生成 $\mathbb{Z}$-代数」的子对 $(B,B^+) \subseteq (A,A^+)$。

> 续见 [nodes/def.discrete-huber-pair.3.md](./def.discrete-huber-pair.3.md)

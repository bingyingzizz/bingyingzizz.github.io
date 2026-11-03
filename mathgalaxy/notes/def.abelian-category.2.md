# 加法 / 阿贝尔范畴　`def.abelian-category`　·　说明
根 `../`

- (1) $\implies$ (2)：**一次取核 + 余核的图追踪**。$i : N \rightarrowtail M$ 把 $N$ 等同到 $\ker(M \to \operatorname{coker} i)$；这一步用「单态射 = 自身的核」这一条预阿贝尔性质，**不用加法结构之外的额外假设**。
- (2) $\implies$ (1)：**反向几乎免费**（$N$ 同构于余核的核 就是说 $i$ 是某个态的核，即正则）。
- (1) $\iff$ (3)：**这一步要「有核有余核」**（即预阿贝尔）。$f = M \to N$ 分解成 $M \twoheadrightarrow \operatorname{im} f \rightarrowtail N$；「满射段正则」正是 (1)。⚠️ 唯一性在**只差一个同构**的意义下成立 —— 「唯一」这个词在这里是本质的：分解不是严格的，因为同一个像可以有不同的代表。
- (1) $\iff$ (4)：**这是最“代数”的一条**（Abel 的原始形式）：$\ker(N \to \operatorname{coker} f) \cong \operatorname{coker}(\ker f \to M)$。它等价于「第一同构定理在范畴里成立」，需要**核与余核都存在**且**单/满态射的正则性**。

> 续见 notes/def.abelian-category.3.md

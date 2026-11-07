# 示性类　`def.characteristic-class`　·　续页（第 2 页）
[在星图里打开](../#n=def.characteristic-class)　·　第 1 页 [nodes/def.characteristic-class.md](./def.characteristic-class.md)

## 陈述（续）
。
设 $E \to B$ 是光滑流形上的秩 $k$ 实向量丛。$E$ 的**示性类**（characteristic class）是一族对应

$$c_{i}(E) \in H^{i}(B; \Lambda),$$

（$\Lambda$ 取 $\mathbb{Z}$、$\mathbb{Z}/2$ 或 $\mathbb{R}$，看具体类）满足两条公理：
1. **自然性**：对任意光滑映射 $f : B_{1} \to B_{2}$ 有 $c_{i}(f^{*}E) = f^{*}c_{i}(E)$；
2. **同构不变**：$E \cong E_{1}$ $\implies$ $c_{i}(E) = c_{i}(E_{1})$。

因此示性类是**从「$B$ 上的向量丛」到「$B$ 的上同调」的自然变换**。
**两条最基本的示性类**（都要再加规范化才唯一）：
- 秩 $k$ 实丛的 **Stiefel–Whitney 类** $w_{i}(E) \in H^{i}(B; \mathbb{Z}/2)$（$0 \le i \le k$），规范化为 $w_{0}(E) = 1$、$i > k$ 时 $w_{i}(E) = 0$，并要求 Whitney 和公式 $w(E \oplus F) = w(E) \smile w(F)$（其中 $w = \sum_{i} w_{i}$）；
- 秩 $k$ 

> 续见 [nodes/def.characteristic-class.3.md](./def.characteristic-class.3.md)

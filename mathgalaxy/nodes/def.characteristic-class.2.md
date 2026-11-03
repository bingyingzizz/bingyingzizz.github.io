# 示性类　`def.characteristic-class`　·　续页（第 2 页）
[在星图里打开](../#n=def.characteristic-class)　·　第 1 页 [nodes/def.characteristic-class.md](./def.characteristic-class.md)

## 陈述（续）
设 $E \to B$ 是光滑流形上的秩 $k$ 实向量丛。$E$ 的**示性类**（characteristic class）是一族对应

$$c_{i}(E) \in H^{i}(B; \Lambda),$$

（$\Lambda$ 取 $\mathbb{Z}$、$\mathbb{Z}/2$ 或 $\mathbb{R}$，看具体类）满足两条公理：
1. **自然性**：对任意光滑映射 $f : B' \to B$ 有 $c_{i}(f^{*}E) = f^{*}c_{i}(E)$；
2. **同构不变**：$E \cong E'$ $\implies$ $c_{i}(E) = c_{i}(E')$。

因此示性类是**从「$B$ 上的向量丛」到「$B$ 的上同调」的自然变换**。

**两条最基本的**：
- 秩 $k$ 实丛的 **Stiefel–Whitney 类** $w_{i}(E) \in H^{i}(B; \mathbb{Z}/2)$（$i = 0, \ldots, k$），$w_{1}(E) \ne 0$ 当且仅当 $E$ 不可定向；
- 秩 $k$ 复丛的 **陈类** $c_{i}(E) \in H^{2i}(B; \mathbb{Z})$（$i = 0, \ldots, k$），$c_{1}$ 是那个「第一障碍」。

> 续见 [nodes/def.characteristic-class.3.md](./def.characteristic-class.3.md)

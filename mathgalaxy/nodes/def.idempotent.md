# 幂等　`def.idempotent`
幂等算子与投影
layer 18 · 定义 · 线性映射与秩 · 抽象代数
[在星图里打开](../#n=def.idempotent)　·　[节点索引](../index.md)

**在做什么**：「做两次和做一次一样」的算子。它等价于「把空间劈成两块、扔掉其中一块」，所以幂等算子与直和分解是同一件事。

设 $T : V \to V$ 线性。称 $T$ **幂等**（idempotent），若

$$T^{2} = T .$$

矩阵情形：$A^{2} = A$。
> 陈述续见 [nodes/def.idempotent.2.md](./def.idempotent.2.md)


## 为什么成立（入边，证明在 proofs/）
- [`def.linear-map`](../nodes/def.linear-map.md) 线性映射：用到了定义 线性映射　[proofs/dep.idem-linmap.md](../proofs/dep.idem-linmap.md)

- …另有入边，续页见 [nodes/def.idempotent.3.md](./def.idempotent.3.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.idempotent.4.md](./def.idempotent.4.md)

refs: Hoffman–Kunze, Linear Algebra, 「Operators on Inner Product Spaces」· 投影；北大《高等代数》· 幂等变换

> 说明见 `notes/def.idempotent.md`

引用：`def.idempotent`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)

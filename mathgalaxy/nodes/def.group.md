# 群　`def.group`
群与阿贝尔群
layer 6 · 定义 · 代数结构 · 抽象代数
[在星图里打开](../#n=def.group)　·　[节点索引](../index.md)

设 $G$ 是**集合**，$\cdot$ 是 $G$ 上的**二元运算**（即函数 $G \times G \to G$，$(a, b) \mapsto a \cdot b$）。称 $(G, \cdot)$ 是一个**群**，当且仅当：

- **结合律**：$(a b) c = a (b c)$ 对一切 $a, b, c \in G$ 成立；
- **单位元**：存在 $e \in G$ 使 $e a = a e = a$ 对一切 $a$ 成立；
- **逆元**：对每个 $a \in G$ 存在 $a^{-1} \in G$ 使 $a a^{-1} = a^{-1} a = e$。

再满足**交换律** $a b = b a$ 的群叫**阿贝尔群**（Abelian group），也叫**交换群**。

## 为什么成立（入边，证明在 proofs/）
- [`def.function`](../nodes/def.function.md) 映射：用到了定义 映射　[proofs/def-dep.group-function.md](../proofs/def-dep.group-function.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.group.2.md](./def.group.2.md)

refs: Lang, Algebra

> 说明见 `notes/def.group.md`

引用：`def.group`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)

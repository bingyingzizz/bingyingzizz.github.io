# 可解群　`def.solvable-group`
可解群（Solvable Group）与导出列
layer 9 · 定义 · 合成列与可解群 · 抽象代数
[在星图里打开](../#n=def.solvable-group)　·　[节点索引](../index.md)

群 $G$ 叫**可解**的，当且仅当存在正规链

$$
\{e\} = G_0 \trianglelefteq G_1 \trianglelefteq \cdots \trianglelefteq G_n = G
$$

使每个商 $G_i / G_{i-1}$ 都是**阿贝尔群**。

**等价刻画**：令 $G^{(0)} := G$、$G^{(k+1)} := [G^{(k)}, G^{(k)}]$（换位子子群），得**导出列**

$$G = G^{(0)} \trianglerighteq G^{(1)} \trianglerighteq G^{(2)} \trianglerighteq \cdots$$
> 陈述续见 [nodes/def.solvable-group.2.md](./def.solvable-group.2.md)


## 它能推出什么 / 谁在用它
- ⇒ [`thm.solvable-quotients`](../nodes/thm.solvable-quotients.md) 可解性对子群与商群封闭

- …另有出边，续页见 [nodes/def.solvable-group.4.md](./def.solvable-group.4.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.solvable-group.3.md](./def.solvable-group.3.md)

refs: Lang, Algebra, Ch. I §5；Dummit–Foote, Abstract Algebra, §3.4

> 说明见 `notes/def.solvable-group.md`

引用：`def.solvable-group`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)

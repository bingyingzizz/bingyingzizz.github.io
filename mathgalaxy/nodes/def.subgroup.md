# 子群　`def.subgroup`
子群
layer 7 · 定义 · 代数结构 · 抽象代数
[在星图里打开](../#n=def.subgroup)　·　[节点索引](../index.md)

设 $(G, \cdot)$ 是群，$H \subseteq G$。称 $H$ 是 $G$ 的**子群**（记 $H \le G$），如果 $H$ 在**限制过来的运算**下自己构成一个群 —— 也就是：

- $e \in H$；
- $a, b \in H \implies ab \in H$（对运算封闭）；
- $a \in H \implies a^{-1} \in H$（对逆封闭）。

（结合律是从 $G$ 里继承的，不必重查。）

## 它能推出什么 / 谁在用它
- 被 [`def.group-action`](../nodes/def.group-action.md) 群作用 用

- …另有出边，续页见 [nodes/def.subgroup.3.md](./def.subgroup.3.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.subgroup.2.md](./def.subgroup.2.md)

refs: Lang, Algebra

## 说明
两条合起来可写成一条：$a, b \in H \implies a b^{-1} \in H$。

任意多个子群的交仍是子群；但**并**一般不是 —— 这也是「由 $S$ 生成的子群 $\langle S \rangle$」要定义成「含 $S$ 的一切子群的交」的原因。

引用：`def.subgroup`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)

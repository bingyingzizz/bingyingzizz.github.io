# 正规算子　`def.normal-operator`
自伴、正规与酉算子
layer 11 · 定义 · 内积空间与正交性 · 抽象代数
[在星图里打开](../#n=def.normal-operator)　·　[节点索引](../index.md)

设 $T : V \to V$ 是有限维内积空间上的线性算子。

- $T$ **自伴**（实数情形叫**对称**，复数情形叫 **Hermite**）：$T^{\ast} = T$；
- $T$ **正规**：$T^{\ast}T = T T^{\ast}$（与自己的伴随交换）；
- $T$ **酉**（正交）：$T^{\ast}T = T T^{\ast} = I$。

层次：$\{$酉$\} \subset \{$正规$\}$，$\{$自伴$\} \subset \{$正规$\}$，两者的交是「自伴且酉」（即 $T^{2} = I$ 的对称变换）。

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.normal-operator.2.md](./def.normal-operator.2.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.normal-operator.3.md](./def.normal-operator.3.md)

refs: Hoffman–Kunze, Linear Algebra, Ch. 8；Roman, Advanced Linear Algebra, Ch. 11

> 说明见 `notes/def.normal-operator.md`

引用：`def.normal-operator`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)

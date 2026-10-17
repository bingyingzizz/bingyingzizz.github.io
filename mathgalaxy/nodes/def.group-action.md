# 群作用　`def.group-action`
群作用、轨道与稳定子（Group Action）
layer 9 · 定义 · 群作用与置换 · 抽象代数
[在星图里打开](../#n=def.group-action)　·　[节点索引](../index.md)

设 $G$ 是群、$X$ 是集合。$G$ 在 $X$ 上的**（左）作用**是一个映射

$$\alpha : G \times X \to X, \qquad (g, x) \mapsto g \cdot x$$

满足两条：

- $e \cdot x = x$ 对一切 $x \in X$；
- $(gh) \cdot x = g \cdot (h \cdot x)$ 对一切 $g, h \in G$、$x \in X$。

两个基本对象：

$$\operatorname{Orb}(x) := Gx := \{\, g \cdot x : g \in G \,\}, \qquad \operatorname{Stab}(x) := G_x := \{\, g \in G : g \cdot x = x \,\}$$
> 陈述续见 [nodes/def.group-action.2.md](./def.group-action.2.md)


## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.group-action.3.md](./def.group-action.3.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.group-action.4.md](./def.group-action.4.md)

refs: Lang, Algebra, Ch. I §5；Dummit–Foote, Abstract Algebra, §4.1

> 说明见 `notes/def.group-action.md`

引用：`def.group-action`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)

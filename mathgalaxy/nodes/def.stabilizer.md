# 稳定子　`def.stabilizer`
稳定子：不动某一点的群元素
layer 11 · 定义 · 群作用与置换 · 抽象代数
[在星图里打开](../#n=def.stabilizer)　·　[节点索引](../index.md)

设群 $G$ 作用在集合 $X$ 上，$x \in X$。集合
$G_x := \operatorname{Stab}(x) := \{\, g \in G : g \cdot x = x \,\} \le G$
称为 $x$ 的**稳定子**（或迷向子群）。

$G_x$ 是 $G$ 的子群；作用的**核**是 $\bigcap_{x \in X} G_x$。轨道–稳定子给出双射 $G/G_x \to Gx$、$gG_x \mapsto g \cdot x$。共轭点有共轭稳定子：$G_{g \cdot x} = g G_x g^{-1}$。

## 为什么成立（入边，证明在 proofs/）
- [`def.group-action`](../nodes/def.group-action.md) 群作用：用到了定义 群作用　[proofs/dep.stabilizer-action.md](../proofs/dep.stabilizer-action.md)

- …另有入边，续页见 [nodes/def.stabilizer.2.md](./def.stabilizer.2.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.stabilizer.3.md](./def.stabilizer.3.md)

refs: Lang, Algebra, Ch. I §5；Dummit–Foote, Abstract Algebra, §4.1

> 说明见 `notes/def.stabilizer.md`

引用：`def.stabilizer`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)

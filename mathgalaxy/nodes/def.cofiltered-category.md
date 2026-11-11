# 余滤过范畴　`def.cofiltered-category`
余滤过范畴
layer 12 · 定义 · 图与极限 · 范畴论
[在星图里打开](../#n=def.cofiltered-category)　·　[节点索引](../index.md)

小范畴 $I$ 叫**余滤过**的，如果它的对偶 $I^{\mathrm{op}}$ 是滤过范畴（`def.filtered-category`）：
1. $I$ 非空；
2. 任意 $X, Y \in I$ 有**共同下界**：存在 $Z \in I$ 与态射 $Z \to X$、$Z \to Y$；
3. 任意平行态射 $f, g : X \rightrightarrows Y$ 有**共同右消解**：存在 $h : Z \to X$ 使 $f \circ h = g \circ h$。
等价地，以 $I$ 为指标的**余滤过图**就是 $I^{\mathrm{op
> 陈述续见 [nodes/def.cofiltered-category.2.md](./def.cofiltered-category.2.md)


## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.cofiltered-category.3.md](./def.cofiltered-category.3.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.cofiltered-category.4.md](./def.cofiltered-category.4.md)

refs: Le Stum, An introduction to condensed mathematics, §1.4（Definition 1.4.1 的对偶）

> 说明见 `notes/def.cofiltered-category.md`

引用：`def.cofiltered-category`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)

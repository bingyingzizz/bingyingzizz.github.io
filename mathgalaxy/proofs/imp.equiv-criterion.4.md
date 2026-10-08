# 全忠实 $+$ 本质满 $\implies$ 范畴等价
`imp.equiv-criterion` · 推出 · strong 边 · 根 `../`

`def.ff-faithful` 忠实 / 满 / 全忠实 + `def.essentially-surjective` 本质满 → `def.cat-equivalence` 范畴等价

由 $\beta$ 的交换性，$G F(f) = G(h)$；再用 $F$ 保持复合，把两边送回 $F(A) \to F(B)$：$F(f) = h$。

**本质满**见「定义」处的注解：等价的两个范畴之间对象差一个同构，这正是 $F$ 本质满。∎

> 这条把「范畴等价」这件看起来要靠造函子的事，换成了两个**可以逐点检查**的条件：Hom 集上双射 + 对象层差一个同构。实际用的时候几乎都走这一条。

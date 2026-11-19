# imp.cofinal-colimit
`imp.cofinal-colimit` · 推出 · strong 边 · 根 `../`

`def.limit` 极限 + `def.cofinal-functor` 共尾函子 → `thm.cofinal-colimit` 共尾函子不改变余极限

**证明的走法**（记 $L = \varinjlim_{i \in I} D(i)$，要证 $L$ 也是 $D \circ F$ 的余极限）：



- $L$ 显然是 $D \circ F$ 的余锥（余锥的腿复合一下就到 $D \circ F$ 上）。
- 设 $\{\, g_{j} : D(F(j)) \to M \,\}$ 是 $D\circ F$ 的余锥。

要对**每个** $i \in I$ 造一条腿 $p_{i} : D(i) \to M$：由 $i \downarrow F$ **非空**，取一条 $f : i \to F(j)$，令 $p_{i} := g_{j} \circ D(f)$。
- **良定义**靠连通性：换一条 $f' : i \to F(j')$，两个选择 $(j, f)$、$(j', f')$ 由 $i \downarrow F$ 的连通性被一条锯齿连起来，沿锯齿走一遍交换图，两条腿给出同一个 $p_{i}$。
- 这样 $M$ 变成 $D$ 的余锥，泛性给出唯一的 $L \to M$ —— 于是 $L$ 满足 $D \circ F$ 余锥的泛性质。
- 反方向由「余锥复合」直接得到。两边互逆。∎

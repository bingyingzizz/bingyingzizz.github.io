# 延拓性质 $\implies$ 单射可裂
`imp.injective-splitting` · 推出 · strong 边 · 根 `../`

`def.injective-module` 内射模 + `def.split-exact` 分裂短正合列 → `prop.injective-splitting` 内射的单射可裂

**（1 蕴含 2）** 取 $A = I$、$f = \mathrm{id}_{I}$。内射性给出 $r : M \to I$ 使 $r \circ i = \mathrm{id}_{I}$ —— 这就是收缩 ✓。

**（2 蕴含 1）** 给定 $A \rightarrowtail B$ 与 $f : A \to I$，取推出
$$P := (I \oplus B)/\{\, (f(a),\ -a) : a \in A \,\},$$
它使 $A \to I$ 与 $A \to B$ 在 $P$ 中合流。$I \to P$ 仍单（推出沿单射仍单：判断 $(x, 0)$ 是否落在像里只看 $I$ 分量）。由 2 取收缩 $r : P \to I$，则 $r \circ (B \to P)$ 就是 $f$ 的延拓 ✓。

**（2 与 3）** 由 `def.split-exact` 的三条等价判据：$i$ 有收缩 $\iff$ 该短正合列分裂 ✓。∎

> 推论：内射模不可能作为**真**子模出现在任何模里 —— 「更大的模」这条路对 $I$ 是封死的，这正是「内射」这个词的由来。

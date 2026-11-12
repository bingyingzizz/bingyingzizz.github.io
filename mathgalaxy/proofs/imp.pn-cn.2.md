# imp.pn-cn
`imp.pn-cn` · 推出 · strong 边 · 根 `../`

`def.perfectly-normal-space` 完美正规空间 + `lem.urysohn` Урысон 引理 → `def.completely-normal-space` 完全正规空间

**第一步：每个闭集都是零点集。** 设 $F \subseteq X$ 闭，写成 $F = \bigcap_{n \ge 1} U_{n}$，$U_{n}$ 开；把 $U_{n}$ 换成 $U_{1} \cap \cdots \cap U_{n}$ 可设 $\{U_{n}\}$ 递减，$F$ 不变。对每个 $n$，$F$ 与 $X \setminus U_{n}$ 是不交闭集，由 $X$ 正规与 **`lem.urysohn`** 存在连续 $f_{n} : X \to [0, 1]$ 使 $f_{n}|_{F} = 0$、$f_{n}|_{X \setminus U_{n}} = 1$。令
$$f := \sum_{n \ge 1} 2^{-n} f_{n} .$$
级数被 $\sum 2^{-n} = 1$ 一致控制，故 $f$ 连续且 $0 \le f \le 1$。由于每一项非负，$f(x) = 0 \iff f_{n}(x) = 0$ 对一切 $n$ 成立 $\iff x \in \bigcap_{n} U_{n} = F$。所以 $F = f^{-1}(0)$ 是零点集 ✓。

> 续见 proofs/imp.pn-cn.3.md

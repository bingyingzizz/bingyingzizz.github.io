# 完备性 ⟺ 不破坏可测性　`prop.complete-measurable`　·　说明
根 `../`

**证明。**
**$(\implies)$** 设 $\mu$ 完备。记 $N := \{f \ne g\}$、$\mu(N) = 0$。对任意可测集 $B$，
$$g^{-1}(B) = \bigl(f^{-1}(B) \cap N^{c}\bigr) \cup \bigl(g^{-1}(B) \cap N\bigr),$$
第一块可测（$f$ 可测）；第二块是**零集的子集**，由完备性可测 ✓。故 $g$ 可测。(b) 同理：$f_{n} \to f$ a.e. 时把 $f$ 在不收敛的零集上改写成 $\limsup_{n} f_{n}$，可测性不变，而它与 $f$ 只差一个零集 ✓。
**$(\Longleftarrow)$** 设 (a) 成立。取零集 $E$（$\mu(E) = 0$）与任意 $F \subseteq E$，令 $f \equiv 0$、$g := \chi_{F}$。则 $f$ 可测，且 $\{f \ne g\} \subseteq E$ 是零集，即 $f = g$ a.e.；由 (a)，$g$ 可测；于是 $F = g^{-1}(\{1\})$ 可测 ✓。故每个零集的子集都可测，**$\mu$ 完备** ✓。（用 (b) 也一样：取常列 $f_{n} \equiv 0$、$f := \chi_{F}$，$f_{n} \to f$ a.e.，由 (b) 得 $\chi_{F}$ 可测。）∎
⭐ 这条说明**完备性恰好就是「重新定义零集上的值不破坏可测性」所需的全部条件**。

> 续见 notes/prop.complete-measurable.2.md

# 五引理　`thm.five-lemma`　·　说明
根 `../`

**证明走泛元，不追元素。** 把「$x \in A_{3}$」读成「任给 $t : T \to A_{3}$」—— $t$ 就是 $A_{3}$ 的一个**泛元**。分两半：

- **$\alpha_{3}$ 单**：设 $\alpha_{3} t = 0$。

由 $\alpha_{4} f_{3} t = g_{3} \alpha_{3} t = 0$ 与 $\alpha_{4}$ 单得 $f_{3} t = 0$，即 $t$ 穿过 $\operatorname{im} f_{2} = \ker f_{3}$：$t = f_{2} s$；

再由 $g_{2} \alpha_{2} s = \alpha_{3} f_{2} s = 0$ 得 $\alpha_{2} s$ 穿过 $\operatorname{im} g_{1} = \ker g_{2}$，即 $\alpha_{2} s = g_{1} r'$，而 $\alpha_{1}$ 满给出 $r' = \alpha_{1} r$，于是 $\alpha_{2} s = g_{1} \alpha_{1} r = \alpha_{2} f_{1} r$，而 $\alpha_{2}$ 单，故 $s = f_{1} r$，于是 $t = f_{2} f_{1} r = 0$。
- **$\alpha_{3}$ 满**：任给 $y : T \to B_{3}$。

> 续见 notes/thm.five-lemma.2.md

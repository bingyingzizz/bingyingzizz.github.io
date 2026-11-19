# imp.five-lemma
`imp.five-lemma` · 推出 · strong 边 · 根 `../`

`def.abelian-category` 阿贝尔范畴 + `def.image` 像 / 余像 + `def.exact-sequence` 一般正合列 → `thm.five-lemma` 五引理

**证明走泛元，不追元素。** 把「$x \in A_{3}$」读成「任给 $t : T \to A_{3}$」—— $t$ 就是 $A_{3}$ 的一个**泛元**。分两半：

- **$\alpha_{3}$ 单**：设 $\alpha_{3} t = 0$。

由 $\alpha_{4} f_{3} t = g_{3} \alpha_{3} t = 0$ 与 $\alpha_{4}$ 单得 $f_{3} t = 0$，即 $t$ 穿过 $\operatorname{im} f_{2} = \ker f_{3}$：$t = f_{2} s$；

> 续见 proofs/imp.five-lemma.2.md

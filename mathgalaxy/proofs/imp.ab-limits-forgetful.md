# imp.ab-limits-forgetful
`imp.ab-limits-forgetful` · 推出 · strong 边 · 根 `../`

`def.group` 群 + `def.limit` 极限 + `def.functor` 函子 + `def.additive-category` 加法范畴 → `prop.ab-limits-forgetful` Ab(C) 的极限

**证明（极限在遗忘函子下逐项算）。** 阿贝尔群对象的定义是一组态射与**交换图**：
$$m : X \times X \to X, \qquad e : 1 \to X, \qquad i : X \to X$$
配上一串等式（结合、单位、逆、交换性）—— 全是「两个复合相等」形式的图。
- 设 $D : I \to \mathrm{Ab}(\mathcal{C})$ 是可图表，记 $UX$ 为 $X$ 的底对象。

因为极限保持极限（特别地保持有限积与终对象），把上述各图和等式逐项送进 $\mathcal{C}$ 后仍然成立；

> 续见 proofs/imp.ab-limits-forgetful.2.md

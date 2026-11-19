# imp.ring-tensor-coproduct
`imp.ring-tensor-coproduct` · 推出 · strong 边 · 根 `../`

`def.ring` 环 + `def.tensor-module` 张量积 + `def.ring-hom` 环同态 → `prop.ring-tensor-coproduct` 交换环的纤维余积是张量积

由交换性 $\varphi$ 是环同态 ✓；

且 $\varphi\beta = f$、$\varphi\gamma = g$ ✓。
- **唯一性**：$D$ 由 $\beta(B)\cup\gamma(C)$ 生成（$b\otimes c = \beta(b)\gamma(c)$），故在两个生成块上定死就唯一 ✓。
于是 $D$ 满足推出的泛性质，即 $B\otimes_{A}C = B\coprod_{A} C$。∎

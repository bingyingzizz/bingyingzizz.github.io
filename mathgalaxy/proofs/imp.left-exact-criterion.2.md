# imp.left-exact-criterion
`imp.left-exact-criterion` · 推出 · strong 边 · 根 `../`

`def.exact-functor` 正合函子 + `def.additive-functor` 加法函子 + `def.preserves-limit` 保极限的函子 + `def.abelian-category` 阿贝尔范畴 → `prop.left-exact-criterion` 左正合性的判据

- **保有限积**：$0 \to M \xrightarrow{\ i_{1}\ } M \oplus N \xrightarrow{\ p_{2}\ } N$ 也是左正合列（$i_{1}$ 单、$\operatorname{im}i_{1} = \ker p_{2}$）✓，被送到左正合列 $0 \to FM \to F(M\oplus N) \to FN$；

而 $F$ **加法**说明 $F$ 保双积、$Fi_{1}$ 就是第一个含入 ✓，于是 $F(M \oplus N)$ 连同 $Fi_{1}, Fi_{2}$ 满足直和的三条等式（见「直和就是积」），即 $F(M\oplus N) \cong FM \oplus FN$ ✓。
两条合起来：$F$ 保有限积与核，从而保所有有限极限，即左正合 ✓。∎

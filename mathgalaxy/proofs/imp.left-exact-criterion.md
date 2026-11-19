# imp.left-exact-criterion
`imp.left-exact-criterion` · 推出 · strong 边 · 根 `../`

`def.exact-functor` 正合函子 + `def.additive-functor` 加法函子 + `def.preserves-limit` 保极限的函子 + `def.abelian-category` 阿贝尔范畴 → `prop.left-exact-criterion` 左正合性的判据

**证明。**
**$(\Longrightarrow)$** 左正合就是**保有限极限** ✓。

保有限极限当然保有限积与核，于是：$F$ 保双积 $\implies$ $F$ 加法（见「加法函子的刻画」）✓；

而左正合列 $0 \to M' \to M \to M''$ 本身就是一个有限极限图表，被 $F$ 送到同样的图表，即仍是左正合列 ✓。
**$(\Longleftarrow)$** 设 $F$ 加法且保左正合列。由「保有限积 + 保核 $\implies$ 保所有有限极限」，只需证这两条 ✓：
- **保核**：$0 \to \ker f \xrightarrow{\ i\ } M \xrightarrow{\ f\ } N$ 是左正合列 ✓，被送到左正合列 $0 \to F(\ker f) \xrightarrow{\ Fi\ } FM \xrightarrow{\ Ff\ } FN$，这正是 $F(\ker f) \cong \ker(Ff)$ ✓；

> 续见 proofs/imp.left-exact-criterion.2.md

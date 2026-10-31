# 左正合性的判据　`prop.left-exact-criterion`　·　说明
根 `../`

**证明。**
**$(\Longrightarrow)$** 左正合就是**保有限极限** ✓。保有限极限当然保有限积与核，于是：$F$ 保双积 $\implies$ $F$ 加法（见「加法函子的刻画」）✓；而左正合列 $0 \to M' \to M \to M''$ 本身就是一个有限极限图表，被 $F$ 送到同样的图表，即仍是左正合列 ✓。
**$(\Longleftarrow)$** 设 $F$ 加法且保左正合列。由「保有限积 + 保核 $\implies$ 保所有有限极限」，只需证这两条 ✓：
- **保核**：$0 \to \ker f \xrightarrow{\ i\ } M \xrightarrow{\ f\ } N$ 是左正合列 ✓，被送到左正合列 $0 \to F(\ker f) \xrightarrow{\ Fi\ } FM \xrightarrow{\ Ff\ } FN$，这正是 $F(\ker f) \cong \ker(Ff)$ ✓；
- **保有限积**：$0 \to M \xrightarrow{\ i_{1}\ } M \oplus N \xrightarrow{\ p_{2}\ } N$ 也是左正合列（$i_{1}$ 单、$\operatorname{im}i_{1} = \ker p_{2}$）✓，被送到左正合列 $0 \to FM \to F(M\oplus N) \to FN$；而 $F$ **加法**说明 $F$ 保双积、$Fi_{1}$ 就是第一个含入 ✓，于是 $F(M \oplus N)$ 连同 $Fi_{1}, Fi_{2}$ 满足直和的

> 续见 notes/prop.left-exact-criterion.2.md

# 切片范畴是拉回　`prop.slice-cartesian`　·　说明
根 `../`

**证明。** 需要证 $\mathcal{C}/T \to \mathcal{C}\times_{\widehat{\mathcal{C}}}\widehat{\mathcal{C}}/T$ 是等价。
- **对象**：$\mathcal{C}/T$ 的对象是 $p : X \to T$（$X\in\mathcal{C}$）；由 **Yoneda**，$\operatorname{Hom}(h_{X}, T) \cong T(X)$，所以 $p$ 与一个态射 $h_{X}\to T$ 一一对应 —— 而右边拉回的对象的正是「$X \in \mathcal{C}$ 连同 $h_{X}\to T$」✓。
- **态射**：$\mathcal{C}/T$ 中 $p \to p'$ 是交换三角（$X\to X'$ 与 $T$ 上的相容性）；把 Yoneda 嵌入作用上去得到 $h_{X}\to h_{X'}$ 与 $h_{X}\to T$ 的相容对，右边正是一对这样的数据。由 Yoneda 嵌入**全忠实**（$\operatorname{Hom}(h_{X},h_{X'}) \cong \operatorname{Hom}(X,X')$），这个对应在 Hom 上是双射 ✓。
- **函子性 / 等价**：对应在复合下保持（Yoneda 是函子）✓ 于是得到一个范畴等价，即原方块**笛卡尔** ✓。
- **特例**：取 $T = h_{X}$，得 $\mathcal{C}/X \simeq \widehat{\mathcal{C}}/h_{X}$ —— 在 $\mathcal{C}$ 里沿 $X$ 切片与在预层范畴里沿 $h_{X}$ 切片是同一件

> 续见 notes/prop.slice-cartesian.2.md

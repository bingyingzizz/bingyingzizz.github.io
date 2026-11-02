# 切片范畴是拉回　`prop.slice-cartesian`　·　说明
根 `../`

由 Yoneda 嵌入**全忠实**（$\operatorname{Hom}(h_{X},h_{X'}) \cong \operatorname{Hom}(X,X')$），这个对应在 Hom 上是双射 ✓。
- **函子性 / 等价**：对应在复合下保持（Yoneda 是函子）✓ 于是得到一个范畴等价，即原方块**笛卡尔** ✓。
- **特例**：取 $T = h_{X}$，得 $\mathcal{C}/X \simeq \widehat{\mathcal{C}}/h_{X}$ —— 在 $\mathcal{C}$ 里沿 $X$ 切片与在预层范畴里沿 $h_{X}$ 切片是同一件事 ✓。∎

也就是说：**切片范畴 $\mathcal{C}/T$ 就是遗忘函子 $\widehat{\mathcal{C}}/T \to \widehat{\mathcal{C}}$ 沿 Yoneda 嵌入拉回来的东西**。

特例最能说明问题：$T = h_{X}$（可表示）时，方块给出 $\mathcal{C}/X \simeq \widehat{\mathcal{C}}/h_{X}$ —— 在 $\mathcal{C}$ 里沿 $X$ 切片，与在预层范畴里沿 $h_{X}$ 切片，是同一件事。

# 光滑映射的对偶复形　`thm.smooth-duality`　·　说明
根 `../`

⭐ 这就是**对偶复形**：光滑情形下 $f^!\mathbf{1}_Y$ 是一条可逆层（线丛）挪到次数 $d$，由 Kähler 微分 $\Omega^1_{A/R}$ 的行列式给出。

⭐ 证明用对角：$g : A \otimes_R A \to A$ 是余维 $d$ 的正则闭浸入（对角 $\Delta_f$），把 $f^!R$ 用 $g^!$ 与「$A \otimes_R A$ 的两条分量映射」拆开，再用正则闭浸入的公式，得到

$$f^!R \otimes f^!R \otimes g^!(A \otimes_R A) \;\cong\; f^!R,$$

比较两边即得 $\det(\Omega)[d]$。

⚠ 这是「相干对偶在光滑情形下就是 Poincaré 对偶」的精确来源：$\omega_{X/Y} = \det(\Omega^1_{X/Y})[d]$。

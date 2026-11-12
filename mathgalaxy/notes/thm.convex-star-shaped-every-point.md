# 凸集在每一点处星形　`thm.convex-star-shaped-every-point`　·　说明
根 `../`

由凸性定义，任取 $x_{0} \in C$ 与 $y \in C$，整条线段 $(1-t)x_{0} + t y$（$t \in [0,1]$）都在 $C$ 内，即 $C$ 关于 $x_{0}$ 星形；证明写在边 `imp.convex-star-shaped-every-point` 上。

⚠ 空集时「对每个 $x_{0} \in C$」是全称命题，真空成立；但空集本身不是星形集（没有星点），见 `def.star-shaped`。两者不矛盾：本条说的是「每个点都是星点」，不是「存在星点」。

📌 因此「凸集 $\Longrightarrow$ 星形集」在非空凸集上成立；写成逐点形式后，空集也不再是反例。

# 紧化　`def.compactification`　·　说明
根 `../`

⭐ **为什么要求稠密**：否则「补点」可以乱补 —— 取 $Y = X \sqcup \{*\}$（$*$ 是孤立点）永远是紧化，毫无信息。稠密性保证 $Y$ 里**没有多余的孤立点**，每一点都由 $X$ 逼近而来。

⭐ **紧化 = 「紧 Hausdorff 反射」的几何形态**：`prop.chaus-reflective` 里的 $\beta X$ 就是 Stone–Čech 紧化，泛性质说的是「$\beta$ 是**反射**」（从 Top 到紧 Hausdorff 的自由函子）。所以「最大紧化」这个说法与「左伴随」是同一件事。

⚠️ **存在性不是白给的**：$X$ 要能嵌进**紧 Hausdorff** 空间，$X$ 必须是完全正则的（$T_{3.5}$ + $T_{1}$，见 `def.completely-regular-space`）。

反过来有 Tychonoff 定理（嵌入方体）保证 $\beta X$ 存在。

所以「每个空间都有 Hausdorff 紧化」是**假**的，而「每个空间都有一点紧化」也是假的 —— 一点紧化要**局部紧**。

> 续见 notes/def.compactification.2.md

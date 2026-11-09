# Cauchy 积分公式、留数公式与 Cauchy–Goursat $\implies$ Newman 围道恒等式
`imp.newman-cauchy-residue` · 推出 · strong 边 · 根 `../`

`thm.cauchy-integral-formula` Cauchy 积分公式 + `thm.residue` 留数定理 + `thm.cauchy-goursat` Cauchy–Goursat 积分定理 → `lem.newman-tauberian` Newman 解析定理

**Cauchy–Goursat 变形。** $g_T$ 是整函数，故 $g_TF/z$ 在 $z=0$ 有可去奇点、在整个 $D$ 上全纯；由 Cauchy–Goursat 定理，它沿 $C$ 的积分为 $0$。于是可以把 $C_-$ 一段上的 $g$ 换到左半圆上：$gF/z$ 在左半圆盘（不含 $0$）上全纯，沿 $C_-$ 与左半圆的积分相等。这两步合起来正是把围道 $C_-$ 变形成左半圆、并让 $g_T$ 项消失的依据。

> 本引理的证明用到这三条；此前只挂了到 PNT 的出边，故层号错为 0。

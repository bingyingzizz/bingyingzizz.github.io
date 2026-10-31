# Weingarten 变换　`def.weingarten-map`　·　说明
根 `../`

**直观**：$W$ 度量「法向转得多快」，也就是曲面弯得多厉害。单位方向 $V$ 上的弯曲量是 $\langle W(V), V\rangle$，见 `def.normal-curvature`。

**自伴从哪来**：坐标路线用 $r_{uv} = r_{vu}$（混合偏导相等）；标架路线用 $\mathrm{d}\omega^{3} = 0$（`lem.second-form-symmetric` 与入边）。后者更省，也不依赖参数网的特殊选取。

⚠️ **符号**：取 $W := -\mathrm{d}n$ 是为了让「球面 $+$ 外法向」的主曲率为负（与 do Carmo 一致）。若取 $W := \mathrm{d}n$，$II$ 也得跟着变号，否则「主曲率 $=$ $W$ 的特征值」不成立。写的 $W\colon r_{i} \mapsto -n_{i}$ 就是这个约定。

**第三基本形式**：$III(v,w) := \langle \mathrm{d}n(v), \mathrm{d}n(w)\rangle = \langle W(v), W(w)\rangle$。$W$ 的特征方程 $W^{2}-2HW+K\,\mathrm{id} = 0$ 翻成二次形式就是 $III-2H\,II+K\,I = 0$（Cayley–Hamilton）。

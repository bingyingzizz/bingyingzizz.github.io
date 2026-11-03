# 紧 Hausdorff 空间构成预拓扑斯　`def.chaus-pretopos`　·　说明
根 `../`

- **① 所有极限与余极限存在**：**极限**来自 $\mathbf{Top}$ 的极限（紧 Hausdorff 对任意积/等化子封闭，用 Tychonoff）；**余极限**要取「商掉等价关系后的紧 Hausdorff 化」，即用 Stone–Čech 型反射把一般商修正成紧 Hausdorff。⚠️ 余极限**不是** $\mathbf{Top}$ 里直接取商，要过一道反射 —— 这一步是这条命题唯一有技术含量的地方。
- **② 有限余积不交且万有**：**不交**用「紧 Hausdorff 的不交并仍紧 Hausdorff」；**万有**是「拉回稳定」，用紧 Hausdorff 的纤维积仍在 $\mathbf{CHaus}$ 里（`prop.cgwh-fiber-product` 型的论证）。
- **③ 等价关系有效且万有**：**有效** = 商映射的核对恰好是原等价关系 —— 在紧 Hausdorff 里靠「商映射是闭的」保证（`prop.chaus-quotient-equiv` 那四条）。
- **④ 满态射正则且万有**：**满态射 = 满射**（同样来自紧 Hausdorff 的特殊性），于是正则性自动。

> 续见 notes/def.chaus-pretopos.4.md
